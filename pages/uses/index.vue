<script lang="ts" setup>
import Desktop from "~/assets/images/uses/desktop.png";
</script>

<template>
  <SeoMeta title="Uses"></SeoMeta>
  <div
    class="bg-gradient-to-t from-transparent via-transparent to-primary/10 rounded-lg md:px-10 px-3 py-5 flex items-start justify-center">
    <img :src="Desktop" style="width: 760px;" class="w-[760px] max-w-full object-cover rounded-lg"
      data-aos="fade-down" />
  </div>

  <div class="text-center mt-5" data-aos="fade-up">
    <div class="text-4xl font-bold mb-2">Uses</div>
    <div>A curated list of the tools and setup I use to build, code, and maintain a productive workflow.</div>
  </div>

  <div class="text-left mt-20 space-y-3" data-aos="fade-right">
    <div class="text-2xl font-semibold">Devices</div>
    <ul class="mt-3 list-disc pl-4">
      <li>
        <a href="https://support.apple.com/id-id/111883" class="text-primary">MacBook Air M1 (2020)</a>: This was my
        primary devices. It was very powerful and can supports fast workflow in multitasking, coding, and technology
        exploration.
      </li>
    </ul>
  </div>

  <div class="text-left mt-5 space-y-3" data-aos="fade-right">
    <div class="text-2xl font-semibold">Coding</div>
    <ul class="mt-3 list-disc pl-4">
      <li>
        <a href="https://code.visualstudio.com/" class="text-primary">VS Code</a>: Versatile code editor. You know it!
      </li>
      <li>
        <a href="https://neovim.io/" class="text-primary">Neovim</a>: via <a href="https://www.lazyvim.org/"
          class="text-primary underline">LazyVim</a>. Current my code editor. Perform well for flexibility and
        productivity.
      </li>
      <li>
        <a href="https://sw.kovidgoyal.net/kitty/" class="text-primary">Kitty</a>: The fast, feature-rich, GPU based
        terminal emulator.
      </li>
      <li>
        <a href="https://github.com/be5invis/Iosevka" class="text-primary">Iosevka</a>: I was using <a
          href="https://github.com/tonsky/FiraCode" class="text-primary">Fira code</a> before. But now, I feel
        comfortable with Iosevka fonts for coding.
      </li>
      <li>
        <a href="https://www.cloudflare.com/" class="text-primary">Cloudflare</a>: with <a href="https://vercel.com/"
          class="text-primary">Vercel</a> actually. For build and deploy on the cloud service.
      </li>
    </ul>
  </div>

  <div class="text-left mt-5 space-y-3" data-aos="fade-right">
    <div class="text-2xl font-semibold">Productivity</div>
    <ul class="mt-3 list-disc pl-4">
      <li>
        <a href="https://zen-browser.app/" class="text-primary">Zen</a>: Welcome to a calmer internet browser.
        Beautifully
        designed, privacy-focused, and packed with features.
      </li>
      <li>
        <a href="https://www.usebruno.com/" class="text-primary">Bruno</a>: Fast, git-friendly open-source API client.
      </li>
      <li>
        <a href="https://fishshell.com/" class="text-primary">Fish</a>: Smart and user-friendly command line shell for
        Linux, macOS, and
        the rest of the family.
      </li>
      <li>
        <a href="https://www.notion.com/product/try-ai-meeting-notes" class="text-primary">Notion</a>: Notion is an
        all-in-one productivity tool that helps users organize notes, tasks, databases, and projects in one place.
      </li>
      <li>
        <a href="https://proton.me/" class="text-primary">Proton</a>: End-to-end encrypted password manager. Securely
        store, share, and autofill your credentials.
      </li>
      <li>
        <a href="https://www.raycast.com/" class="text-primary">Raycast</a>: Shortcut to everything. Powerful
        productivity tools all with an extendable launcher.
      </li>
      <li>
        <a target="_blank" href="https://github.com/izzaalfiansyah/dotfiles" class="text-primary">Dotfiles</a>: My setup
        configuration files. You can check it <a target="_blank" href="https://github.com/izzaalfiansyah/dotfiles"
          class="text-primary underline">here</a>
      </li>
    </ul>
  </div>
</template>
