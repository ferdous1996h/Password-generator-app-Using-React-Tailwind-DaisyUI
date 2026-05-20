import { useActionState, useState } from 'react';
import strengthTest from './components/utils/strengthTest';
import DisplayPassword from './components/DisplayPassword';
import randomGEN from './components/utils/randomGEN';
import Generator from './components/Generator';
export default function App() {
  const [passWord, setPassWord] = useState(null);
  const strengthPASS = strengthTest(passWord);
  const copyText = async () => {
    await navigator.clipboard.writeText(passWord);
    alert('Copied');
  };
  async function handleForm(prevState, formData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const errors = {};
    const passLength = parseInt(formData.get('passlength'));
    if (passLength < 6) {
      errors.passCondition = 'Password length must be atleast 6 characters';
    }
    const upperCase = formData.get('upperCase');
    const lowerCase = formData.get('lowerCase');
    const number = formData.get('numberInclude');
    const symbol = formData.get('symbol');
    const passData = {
      upperCase: upperCase ? true : false,
      lowerCase: lowerCase ? true : false,
      number: number ? true : false,
      symbol: symbol ? true : false,
    };
    if (Object.values(passData).every(ele => ele == false)) {
      errors.charCondition = 'Atleast 1 condition type must be selected';
    }
    if (Object.keys(errors).length > 0) {
      setPassWord(null);
      return {
        success: false,
        errors,
      };
    }

    passData.length = passLength;
    setPassWord(randomGEN(passData));
    return {
      success: true,
      message: 'Your password is successfully generated',
    };
  }
  const [state, formAction, isPending] = useActionState(handleForm, null);
  return (
    <main className="bg-black min-h-dvh text-white flex flex-col gap-6 justify-center items-center">
      <p className="text-4xl font-bold text-gray-400">Password Generator</p>
      <DisplayPassword passWord={passWord} copyText={copyText} />
      <Generator
        formAction={formAction}
        isPending={isPending}
        state={state}
        strengthPASS={strengthPASS}
      />
    </main>
  );
}
