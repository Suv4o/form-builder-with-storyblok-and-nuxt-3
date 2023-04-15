export interface Stories {
    data: {
        stories: [
            {
                alternates: string[];
                content: {
                    [index: string]: any;
                };
                created_at: string;
                full_slug: string;
                group_id: string;
                id: number;
                is_startpage: boolean;
                meta_data: any;
                name: string;
                parent_id: number;
                position: number;
                published_at: string | null;
                first_published_at: string | null;
                slug: string;
                sort_by_date: string | null;
                tag_list: string[];
                uuid: string;
            }
        ];
    };
    perPage: number;
    total: number;
    headers: any;
}

type Story = Stories["data"]["stories"][0];
type ReactiveStory = Ref<Story>;

export function useStories() {
    async function fetchStoriesBySlug(slug: string) {
        try {
            const story = await useAsyncStoryblok(slug, {
                version: "draft",
            });
            return story as ReactiveStory;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        fetchStoriesBySlug,
    };
}
