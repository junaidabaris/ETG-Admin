import { useEffect, useState } from "react"
import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";
let count = 0
export const MultiselectOption = ({ allAttributes, children, data, showCheckbox, getSelectedOptions, item }) => {
    const params = useParams()
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const handleRemove = (option) => {
        setSelectedOptions([...option])
    }
    useEffect(() => {
        getSelectedOptions(selectedOptions)
    }, [selectedOptions])

    useEffect(() => {
        count++
        if (params) {
            const filterd = item?.variation_Form?.map((item) => {
                return { ...item, name: item.title, title: item.title }
            })
            setSelectedOptions2(filterd)

        }
        if (count === 3) {
            if (params) {
                if (allAttributes) {
                    const filterd = allAttributes?.map((item) => {
                        return { ...item, name: item.title, title: item.title }
                    })
                    getSelectedOptions(filterd);
                }
                const filterd = item?.variation_Form?.map((item) => {
                    return { ...item, name: item.title, title: item.title }
                })
                setSelectedOptions2(filterd)
            }
        } else {
            return
        }

    }, [allAttributes, item])

    if (!params) {
        return (
            <>
                {children && children}
                <Multiselect
                    isObject={true}
                    displayValue="name"
                    options={data}
                    showCheckbox={showCheckbox}
                    selectedValues={[]}
                    onRemove={(option) => {
                        handleRemove(option)
                    }}
                    onSelect={(option) => {
                        let clonedOptions = [...option]
                        setSelectedOptions(clonedOptions)
                    }}
                />
            </>
        )
    } else {
        return (
            <>
                {children && children}
                <Multiselect
                    isObject={true}
                    displayValue="name"
                    options={data}
                    showCheckbox={showCheckbox}
                    selectedValues={selectedOptions2}
                    onRemove={(option) => {
                        handleRemove(option)
                    }}
                    onSelect={(option) => {
                        let clonedOptions = [...option]
                        setSelectedOptions(clonedOptions)
                    }}
                />
            </>
        )
    }
}