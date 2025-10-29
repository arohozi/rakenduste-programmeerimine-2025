"use client";

import { useState } from "react";
import {
  Button,
  Stack,
  Paper,
  Title,
  Text,
  Code,
  Image,
} from "@mantine/core";

export default function ApiFetcherCats() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [gifUrl, setGifUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApis = async () => {
    setIsLoading(true);
    try {
      // cataas provides simple endpoints that return an image directly.
      // We add a cache-busting query param so each click gets a "fresh" image.
      const stamp = Date.now();
      setCatUrl(`https://cataas.com/cat?${stamp}`);
      setGifUrl(`https://cataas.com/cat/gif?${stamp}`);

    } catch (error) {
      console.error("Error fetching cat images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack gap="lg">
      <Button onClick={fetchApis} loading={isLoading} size="lg">
        Fetch Cat APIs
      </Button>

      {catUrl && (
        <Paper shadow="sm" p="md" radius="md">
          <Title order={3} mb="md">
            Cat API
          </Title>

          <Text fw={500} mb="xs">
            URL:
          </Text>
          <Code block mb="md">
            {catUrl}
          </Code>

          <Text fw={500} mb="xs">
            Image:
          </Text>
          <Image src={catUrl} alt="Random cat" radius="md" h={400} w="auto" fit="contain" />
        </Paper>
      )}

      {gifUrl && (
        <Paper shadow="sm" p="md" radius="md">
          <Title order={3} mb="md">
            Cat GIF
          </Title>

          <Text fw={500} mb="xs">
            URL:
          </Text>
          <Code block mb="md">
            {gifUrl}
          </Code>

          <Text fw={500} mb="xs">
            GIF:
          </Text>
          <Image src={gifUrl} alt="Random cat gif" radius="md" h={400} w="auto" fit="contain" />
        </Paper>
      )}

    </Stack>
  );
}
