import {
  dataAdmissaoFormatada,
  phoneFormat,
} from '../../../utils/formatadores/UserFormatadores'
import { TModalTable } from '../../../types/TModalTable'

const ModalTable = ({ admission_date, job, phone }: TModalTable) => {
  return (
    <div className="grid grid-rows-3 gap-y-4 mt-[31.5px] mb-[32px] font-roboto">
        <div className="flex justify-between items-center ml-[16px] mr-[23px] border-b-[1px] border-dashed">
          <p className="font-medium text-[16px]">Cargo</p>
          <p>{job}</p>
        </div>
        <div className="flex justify-between items-center ml-[16px] mr-[23px] border-b-[1px] border-dashed">
          <p className="font-medium  text-[16px]">Data de Admissão</p>
          <p>{dataAdmissaoFormatada(admission_date)}</p>
        </div>
        <div className="flex justify-between items-center ml-[16px] mr-[23px] border-b-[1px] border-dashed">
          <p className="font-medium  text-[16px]">Telefone</p>
          <p>{phoneFormat(phone)}</p>
        </div>
    </div>
  )
}

export default ModalTable
