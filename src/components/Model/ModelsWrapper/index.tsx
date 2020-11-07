import React,{useCallback,useRef,useState} from 'react';
import ModelsContext, {StylesModel} from './ModelsContext'
import { Container, OverlaysRoot } from './styles';
import ModelOverlay from '../ModelOverlay';

const ModelsWrapper: React.FC = ({children}) => {

  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setregisteredModels] = useState<StylesModel[]>([])
  const registerModel =useCallback(
    (model: StylesModel) => {
      setregisteredModels(state=>[...state,model])
    },
    [],
  )
  const unregisterModel = useCallback(
    (modelName: string) => {
      setregisteredModels(state=> state.filter(model => model.modelName === modelName))
    },
    [],
  )
  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item =>item.modelName === modelName) || null
  }, [registeredModels])

  return (
    <ModelsContext.Provider
     value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
      }}>
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item=>(
            <ModelOverlay key={item.modelName} model={item}>{item.overlayNode}</ModelOverlay>
          ))}
        </OverlaysRoot>
      {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
