import PageHeading from '../components/PageHeading'
import { useAppContext } from '../providers/AppStateProvider'
import { useAuthContext } from '../providers/StacksAuthProvider'

export default function Case2() {
  const { network, address } = useAuthContext()
  const { appState, setAppstate } = useAppContext()

  return (
    <div className="flex flex-col laptop:max-w-[60%] gap-6 m-auto">
      <PageHeading>Case 2</PageHeading>
    </div>
  )
}
