import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ActionToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" my="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="xl"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[8] : theme.colors.pink[5],
                })}
            >
                {colorScheme === 'dark' ? <IconSun size="1.5rem" /> : <IconMoonStars size="1.5rem" />}
            </ActionIcon>
        </Group>
    );
}