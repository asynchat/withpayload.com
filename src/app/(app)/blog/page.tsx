import Image from "next/image";
import Link from "next/link";

import { getGlobalSettings } from "@/_features/globals/actions";
import { Container, Description, NewTabLink, Title } from "@/components/ui";
import { APP_URL } from "@/constants";
import { getMetadata } from "@/utils/getMetadata";
import { formatDate } from "@/utils/helpers";
import { IconBrandGithub, IconBrandVercel } from "@tabler/icons-react";

import { getPosts } from "../../../_features/blog/actions";

export async function generateMetadata() {
  const { seo } = await getGlobalSettings();

  const title = seo?.metaTitle ?? "";
  const description = seo?.metaDescription ?? "";
  const url = `${APP_URL}`;

  return getMetadata({
    title,
    description,
    url,
  });
}

type Params = Promise<{ sortBy: string }>;

const Homepage = async ({ params }: { params: Params }) => {
  const { sortBy: selectedSortBy } = await params;

  const { homepage } = await getGlobalSettings();
  const { docs: posts } = await getPosts({
    sortBy: selectedSortBy,
  });
  return (
    <div className="">
      <Container>
        <div className="divide-y">
          {posts.map((post) => {
            const featuredImageUrl =
              post.featuredImage &&
              typeof post.featuredImage === "object" &&
              "url" in post.featuredImage &&
              `${post.featuredImage.url}`;

            return (
              <div key={post.id} className="py-16">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8">
                  <div className="sm:w-1/3 mb-4 sm:mb-0">
                    {featuredImageUrl && (
                      <Link href={`/blog/${post.slug}`}>
                        <div className="aspect-video">
                          <Image
                            className="object-cover w-full transition rounded-lg aspect-video group-hover:opacity-90 bg-cover"
                            src={featuredImageUrl}
                            width={800}
                            height={400}
                            alt={post.title}
                          />
                        </div>
                      </Link>
                    )}

                    {!featuredImageUrl && (
                      <time
                        dateTime={post.createdAt}
                        className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                      >
                        {formatDate(post.createdAt)}
                      </time>
                    )}
                  </div>

                  <div className="sm:w-2/3 space-y-5">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            className="text-gray-900 dark:text-gray-100"
                            href={`/blog/${post.slug}`}
                          >
                            {post.title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {post.tags?.map((tag) => (
                            <div
                              key={typeof tag === "string" ? tag : tag.id}
                              className="text-sm font-medium uppercase text-gray-600"
                            >
                              #
                              {typeof tag === "string"
                                ? tag
                                : tag.label || tag.name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {post.description}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${post.title}"`}
                        href={`/blog/${post.slug}`}
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
