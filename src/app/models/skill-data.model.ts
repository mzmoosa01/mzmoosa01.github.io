
export interface SkillItem {
    name: string,
    value: number
}

export interface SkillCategory {
    name: string,
    items: SkillItem[]
}