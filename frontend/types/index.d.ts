export type socialMedia = {
    facebook?: string,
    instagram?: string,
    twitter?: string,
    linkedin?: string
}

export type Teacher = {
    name: string,
    img?: string,
    social?: socialMedia
}

export type Testimony = {
    name?: string,
    rating?: number,
    message?: string,
    img?: string
}

export type ContactItem = {
    label: string,
    icon: string,
    value: string,
    url: string
}