export interface SearchProps {
    onSearch: (query: string, category: string) => void
}

export interface BranchFormData {
    sampana: string
    category: string
    fiangonana: string
    mlv: number
    synoda: string
    dateCreated: string
    isConsecrated: boolean
    dateConsecrated?: string
    memberCount: number
    officeCount: number
    president: {
        name: string
        phone?: string
        email?: string
    }
    vicePresident: {
        name: string
        phone?: string
        email?: string
    }
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

