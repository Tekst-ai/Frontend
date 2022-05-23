import type { NextPage } from 'next'
import { HelpNavigation, SupportCard } from '../../components/helpCenter'
import HelpTitle from '../../components/helpCenter/HelpTitle'

const Faq: NextPage = () => {
    return (
        <div>
            <div></div>

            <HelpNavigation/>

            <HelpTitle
                title="Veelgestelde vragen"
                text="Tekst placeholder tekst placeholder tekst placeholder tekst placeholder tekst placeholder"
            />

            <SupportCard/>
        </div>
    )
  }
  
  export default Faq