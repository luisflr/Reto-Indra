import { useEffect, useState, ChangeEvent } from "react"
import { useNavigate } from "react-router-dom";

import { getUser } from "../../../services/AuthServices";
import { useAppDispatch } from "../../../hooks/useRedux";
import { authUser } from "../../../redux/userSlice";

import { CheckboxOptionsInterface } from "../../../Interfaces/ConstantInterfaces";
import { checkBoxOptions, documentNumberToTest, phoneNumberToTest } from "../utils/constants";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState(false)
  const [documentValue, setDocumentValue] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState(false)
  const [checkedBox, setCheckedBox] = useState<CheckboxOptionsInterface[]>(checkBoxOptions)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('DNI');

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDocumentValue = (e: ChangeEvent<HTMLInputElement>) => setDocumentValue(e.target.value)

  const handlePhoneValue = (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)

  const handleSearch = () => {
    setSearch(true)
  }

  const handleChecked = (index: number) => {
    const newCheckboxOptions = [...checkedBox];
    newCheckboxOptions[index].isChecked = !newCheckboxOptions[index].isChecked;
    setCheckedBox(newCheckboxOptions);
  }

  const handleSearchUser = async () => {
    setIsLoading(true)
    const isValid = checkedBox.map(_checkedBox => {
      if (!_checkedBox.isChecked) return false
      return true
    })
    if (documentValue === documentNumberToTest 
      && phoneNumber === phoneNumberToTest && isValid[0] && isValid[1]) {
      try {
        const data = await getUser()
        dispatch(authUser(data))
        localStorage.setItem('user', JSON.stringify(data))
        setIsLoading(false)
        setSearch(false)
        navigate('/plans')
      } catch (error) {
        setIsLoading(false)
        setSearch(false)
      }
    } else {
      setError(true)
      setIsLoading(false)
      setSearch(false)
    }

  }

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }

  useEffect(() => {
    if(search) handleSearchUser()
  }, [search])

  return {
    /* States */
    isLoading,
    documentValue,
    phoneNumber,
    error,
    checkedBox,
    isOpen,
    /* State Functions */
    setCheckedBox,
    selectedValue,
    /* Functions */
    handleSearch,
    handleDocumentValue,
    handlePhoneValue,
    handleChecked,
    handleChangeOption,
    openModal,
    closeModal
  }
}

export default useLogin