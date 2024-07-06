<script lang="ts">
    import { onMount } from 'svelte';
  
    const words: { word: string, iconUrl: string }[] = [
    { word: "Git", iconUrl: "https://skillicons.dev/icons?i=git" },
    { word: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" },
    { word: "React", iconUrl: "https://skillicons.dev/icons?i=react" },
    { word: "Prisma", iconUrl: "https://skillicons.dev/icons?i=prisma" },
    { word: "MySQL", iconUrl: "https://skillicons.dev/icons?i=mysql" },
    { word: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs" },
    { word: "Docker", iconUrl: "https://skillicons.dev/icons?i=docker" },
    { word: "Kotlin", iconUrl: "https://skillicons.dev/icons?i=kotlin" },
    { word: "Android Studio", iconUrl: "https://skillicons.dev/icons?i=androidstudio" },
    { word: "Rust", iconUrl: "https://skillicons.dev/icons?i=rust" },
    { word: "Bash", iconUrl: "https://skillicons.dev/icons?i=bash" },
    { word: "C#", iconUrl: "https://skillicons.dev/icons?i=cs" },
    { word: ".NET", iconUrl: "https://skillicons.dev/icons?i=dotnet" },
    { word: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
    { word: "Azure", iconUrl: "https://skillicons.dev/icons?i=azure" },
    { word: "Angular", iconUrl: "https://skillicons.dev/icons?i=angular" },
    { word: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgresql" },
    { word: "GitLab", iconUrl: "https://skillicons.dev/icons?i=gitlab" },
    { word: "JavaScript", iconUrl: "https://skillicons.dev/icons?i=js" },
    { word: "Python", iconUrl: "https://skillicons.dev/icons?i=py" },
    { word: "TensorFlow", iconUrl: "https://skillicons.dev/icons?i=tensorflow" },
    { word: "C++", iconUrl: "https://skillicons.dev/icons?i=cpp" },
    { word: "Postman", iconUrl: "https://skillicons.dev/icons?i=postman" },
    { word: "Java", iconUrl: "https://skillicons.dev/icons?i=java" },
    { word: "Markdown", iconUrl: "https://skillicons.dev/icons?i=md" },
    { word: "RabbitMQ", iconUrl: "https://skillicons.dev/icons?i=rabbitmq" },
    { word: "Sentry", iconUrl: "https://skillicons.dev/icons?i=sentry" },
    { word: "Svelte", iconUrl: "https://skillicons.dev/icons?i=svelte" },
    { word: "TailwindCSS", iconUrl: "https://skillicons.dev/icons?i=tailwind" }
  ];
  
    let currentWord: string = '';
    let currentIconUrl: string = '';
    let currentIndex: number = 0;
    let currentCharIndex: number = 0;
    let typingInterval: number;
  
    function typeWord() {
      currentWord = '';
      currentIconUrl = '';
      typingInterval = window.setInterval(() => {
        if (currentCharIndex < words[currentIndex].word.length) {
          currentWord += words[currentIndex].word[currentCharIndex];
          currentCharIndex++;
        } else {
          clearInterval(typingInterval);
          currentIconUrl = words[currentIndex].iconUrl;
          setTimeout(deleteWord, 2000);
        }
      }, 150);
    }
  
    function deleteWord() {
      typingInterval = window.setInterval(() => {
        if (currentCharIndex > 0) {
          currentWord = currentWord.slice(0, -1);
          currentCharIndex--;
        } else {
          clearInterval(typingInterval);
          currentIconUrl = '';
          currentIndex = (currentIndex + 1) % words.length;
          setTimeout(typeWord, 500);
        }
      }, 50);
    }
  
    onMount(() => {
      typeWord();
  
      return () => {
        clearInterval(typingInterval);
      };
    });
  </script>
  
  <style>
    .word {
      font-size: 2rem;
      white-space: nowrap;
    }
  
    .icon {
      display: inline-block;
      vertical-align: middle;
      margin-left: 8px;
    }
  </style>
  
  <span class="word font-semibold">{currentWord}</span>
  {#if currentIconUrl}
    <img class="icon" src="{currentIconUrl}" alt="{words[currentIndex].word} icon">
  {/if}
  