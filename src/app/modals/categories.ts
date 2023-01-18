interface DevResources {
    name?: string;
    url?: string;
    categories?:  DevResources[];
}

interface Categories{
    subCategory: string,
    category: string,
    card: Card[];
}

interface Card {
    image: string,
    type: string,
    path: string,
    discription: string
}