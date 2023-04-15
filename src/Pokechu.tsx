import React, {useState} from 'react';
import {
    Center,
    Header,
    Container,
    Grid,
    Text,
    Group,
    ColorSchemeProvider,
    MantineProvider,
    ColorScheme,
    HoverCard,
} from '@mantine/core';
import './Pokechu.css';
import {ActionToggle} from "./theme_scheme";


function PokeHeader() {

    // const maxScroll = useHeadroom({fixedAt: 100})
    return (
        <Header height={90} p={5}>
            <Group position={'apart'}>
                <a href={'https://pokeapi.co/'}><img src={'https://i.gifer.com/4xjS.gif'}
                                                     style={{height: 75}}></img></a>
                <HoverCard width={69} shadow={"sm"}>
                    <HoverCard.Target>
                        <h1 className={'title'}>PokechU</h1>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size={'sm'}>
                            <Center mx={5}>
                                <a href={'https://pokeapi.co/'} style={{textDecoration: 'none', color: "deeppink", textShadow: '0 0 2px deeppink'}}>PokeAPI</a>
                            </Center>
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
                <div className={'themeBtn'}>
                    <ActionToggle/>
                </div>

            </Group>
        </Header>
    );
}

function Pokechu() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                <Container fluid>
                    <PokeHeader/>
                    <hr/>
                    <Grid>
                        <Grid.Col span={'auto'}></Grid.Col>
                        <Grid.Col span={6} className={'form'}>
                            <Center >
                                <div>
                                    a
                                    <br/>a
                                    <br/>a
                                    <br/>a
                                    <br/>a
                                    <br/>a
                                    <br/>a
                                    <br/>
                                </div>

                            </Center></Grid.Col>
                        <Grid.Col span={"auto"}></Grid.Col>
                    </Grid>
                </Container>

            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default Pokechu;
