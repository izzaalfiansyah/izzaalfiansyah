<script setup lang="ts">
import { profile } from "~/datas/identity";

defineProps<{
  title?: string;
  description?: string;
  metas?: Array<{
    name: string;
    content: any;
  }>;
}>();

const siteUrl = window.location.origin;
</script>

<template>
  <Head>
    <Title>
      {{ title ? `${title} -` : "" }}
      {{ profile.siteName }}
    </Title>

    <Meta name="title" :content="title ?? profile.siteName" />
    <Meta name="author" :content="profile.name" />
    <Meta name="description" :content="description ?? profile.description" />
    <Meta name="keywords" :content="profile.name" />

    <Meta property="og:title" :content="title ?? profile.siteName" />
    <Meta property="og:url" :content="siteUrl" />
    <Meta
      property="og:description"
      :content="description ?? profile.description"
    />
    <Meta property="og:image" :content="`${siteUrl}/favicon.ico`" />

    <Link rel="icon" :href="`${siteUrl}/favicon.ico`" />
    <Link
      rel="shortcut icon"
      :href="`${siteUrl}/favicon.ico`"
      type="image/x-icon"
    />
    <Link rel="apple-touch-icon" :href="`${siteUrl}/favicon.ico`" />

    <template v-for="meta in metas || []">
      <Meta :name="meta.name" :property="meta.name" :content="meta.content" />
    </template>
  </Head>
</template>
