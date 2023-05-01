import React, {useState} from 'react';
import {
    Button,
    Center,
    ColorScheme,
    ColorSchemeProvider,
    Container,
    Grid,
    Group,
    Header,
    HoverCard,
    MantineProvider,
    Space,
    Text,
    TextInput
} from '@mantine/core';
import './Pokechu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ActionToggle} from "./theme_scheme";
import {useForm} from "@mantine/form";

type Pokemon = {
    name: string
    sprites: {
        front_default: string,
        front_shiny: string,
    }
}

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
                                <a href={'https://pokeapi.co/'} style={{
                                    textDecoration: 'none',
                                    color: "deeppink",
                                    textShadow: '0 0 2px deeppink'
                                }}>PokeAPI</a>
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

function PokeForm() {
    const [pokemon, setPokemon] = useState<Pokemon>()

    const form = useForm<Pokemon>({
        initialValues: pokemon,
        validate: {
            name: (value) => {
                if (value.length === 0) {
                    return 'ENTER THE POKEMON';
                }
            },
        },
    });

    const fetchPokemon = async ({name}: Pokemon) => {
        try {
            const api = "https://pokeapi.co/api/v2/pokemon/" + name;
            const response = await fetch(api);
            const data = await response.json();
            setPokemon(data)
        } catch (err) {
            return (
                <div>
                    <h1 className={'display-5'}>Not found</h1>
                </div>
            )
        }
    }

    return (
        <form onSubmit={form.onSubmit((values) => fetchPokemon(values))}>
            <Grid>
                <Grid.Col span={'auto'}></Grid.Col>
                <Grid.Col span={6} className={'form'}>
                    <Center>
                        <TextInput style={{marginTop: '69px'}} className={'input'} type={'text'}
                                   placeholder={'Search a pokemon'} {...form.getInputProps('name')}/>
                    </Center>
                    <Space h={'xl'}></Space>
                    <Center mt={5}>
                        <div className={'searchBtn'}>
                            <Button type='submit' id={'btn'} name={'searchBtn'}
                                    className={'btn btn-info'}
                            >🔎</Button>
                        </div>
                    </Center>
                    <Space h={'xl'}></Space>
                    <Group py={'xl'} position={'center'} spacing={'xl'}>
                        <div className={"sprite bg-white rounded"} >
                            {/*<Center><h1 className={'display-5 fs-3'}>Default</h1></Center>*/}
                            <img className={"sprite"}  src={pokemon?.sprites.front_default}
                                 alt={pokemon?.name}/>
                        </div>
                        <div className={"sprite bg-white rounded"}>
                            {/*<Center><h1 className={'display-5 fs-3'}>Shiny</h1></Center>*/}
                            <img className={"sprite"} src={pokemon?.sprites.front_shiny}
                                 alt={pokemon?.name}/>
                        </div>


                    </Group>
                </Grid.Col>
                <Grid.Col span={"auto"}></Grid.Col>
            </Grid>
        </form>
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
                    <Space h={'md'}></Space>
                    <PokeForm/>
                    {/*<h1>{pokemon.map((pokemon: { name: any; }) => console.log(pokemon.name))}</h1>*/}
                </Container>

            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default Pokechu;
