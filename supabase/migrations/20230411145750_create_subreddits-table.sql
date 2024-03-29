create table "public"."subreddits" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now()
);


CREATE UNIQUE INDEX subreddits_pkey ON public.subreddits USING btree (id);

alter table "public"."subreddits" add constraint "subreddits_pkey" PRIMARY KEY using index "subreddits_pkey"