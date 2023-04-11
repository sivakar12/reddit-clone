alter table "public"."subreddits" add column "description" text;

alter table "public"."subreddits" add column "name" text not null;

CREATE UNIQUE INDEX subreddits_name_key ON public.subreddits USING btree (name);

alter table "public"."subreddits" add constraint "subreddits_name_key" UNIQUE using index "subreddits_name_key";

