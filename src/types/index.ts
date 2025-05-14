export interface Facility {
    id: string;
    name: string;
    address: string;
    distance: {
        time: string;
        miles: string;
    };
    rating: number;
    isTopRated: boolean;
}

export interface Partner {
    id: string;
    title: string;
    description: string;
    icon: string;
    badgeText: string;
    badgeColor: string;
    stats: {
        label: string;
        value: string;
    }[];
    linkText: string;
    linkColor: string;
}

export interface Testimonial {
    id: string;
    title: string;
    content: string;
    rating: number;
    author: {
        name: string;
        age: number;
        treatment: string;
        image: string;
    };
}

export interface Tab {
    id: string;
    label: string;
    content: {
        title: string;
        description: string;
    };
}

export interface RehabProgram {
    id: string;
    title: string;
    description: string;
}