import type { NextPage } from "next"
import { FiAlertCircle, FiCheckCircle, FiXCircle } from "react-icons/fi"
import { Colors } from "../../variables"

interface CheckStatusProps {
    status: any
}

const CheckStatus: NextPage<CheckStatusProps> = ({ status }) => {
    if (status === "synced") {
        return (
            <>
                <FiCheckCircle fontSize={16} color={Colors.positive} strokeWidth={2.5}/>
                
                <span>{ status }</span>
            </>
        )
    } else if (status === "partial") {
        return (
            <>
                <FiAlertCircle fontSize={16} color={Colors.accentOrange} strokeWidth={2.5}/>
                
                <span>{ status }</span>
            </>
        )
    } else {
        return (
            <>
                <FiXCircle fontSize={16} color={Colors.negative} strokeWidth={2.5}/>
                
                <span>{ status }</span>
            </>
        )
    }
}

export default CheckStatus