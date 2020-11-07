import React, { ReactNode } from 'react'

export interface StylesModel {
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext{
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: StylesModel[]
    registerModel: (model: StylesModel) => void
    unregisterModel: (modelName: string) => void
    getModelByName: (modelName: string) => StylesModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)