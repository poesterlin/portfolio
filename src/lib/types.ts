export interface LabeledBlock {
    label: string;
    content: Item[];
};

export interface Item {
    header: string;
    body: string;
    list: string[];
    links: Link[];
    images?: string | string[];
    background?: boolean;
    additional?: {
        header: string;
        body: string;
    }
};

export interface Link {
    href: string;
    desc: string;
}