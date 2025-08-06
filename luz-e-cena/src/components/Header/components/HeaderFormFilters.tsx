import SelectorGroup from '../../Selector/SelectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOption'

const cities = [
  { id: 1, name: 'São Paulo' },
  { id: 2, name: 'Rio de Janeiro' },
  { id: 3, name: 'Belo Horizonte' },
  { id: 4, name: 'Curitiba' },
  { id: 5, name: 'Porto Alegre' },
  { id: 6, name: 'Salvador' },
]

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot />}>
        <SelectorOption value="" label="Selecione uma cidade" />
        { cities.map(cidade => (
          <SelectorOption key={cidade.id} value={cidade.name} label={cidade.name} />
        )) }
      </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters