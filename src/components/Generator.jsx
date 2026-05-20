import { useState } from 'react';
import SubmitButton from './SubmitButton';
import StrengthStatus from './StrengthStatus';
import PassCondition from './PassCondition';
export default function Generator({
  formAction,
  isPending,
  state,
  strengthPASS,
}) {
  const [passLength, setPassLength] = useState(0);

  return (
    <section className="font-mono bg-gray-800 p-6 w-[40em] flex flex-col justify-between">
      <div className="flex justify-between">
        <p className="text-4xl">Character Length</p>
        <p className="text-4xl text-green-300">{passLength}</p>
      </div>
      <form action={formAction} className="flex flex-col gap-6">
        <input
          type="range"
          min={0}
          max="20"
          value={passLength}
          name="passlength"
          onChange={e => setPassLength(e.target.value)}
          className="range range-success w-full mt-12"
        />
        {state?.errors?.passCondition && (
          <PassCondition msg={state?.errors?.passCondition} />
        )}
        <label htmlFor="upperCaseID" className="text-2xl">
          <input
            type="checkbox"
            id="upperCaseID"
            name="upperCase"
            className="checkbox checkbox-xl  checkbox-accent mr-4"
          />
          Include Uppercase Letters
        </label>

        <label htmlFor="lowerCaseID" className="text-2xl">
          <input
            type="checkbox"
            id="lowerCaseID"
            name="lowerCase"
            className="checkbox
          checkbox-xl checkbox-accent mr-4"
          />
          Include Lowercase Letters
        </label>
        <label htmlFor="numberIncludeID" className="text-2xl">
          <input
            type="checkbox"
            name="numberInclude"
            id="numberIncludeID"
            className="checkbox
          checkbox-xl checkbox-accent mr-4"
          />
          Include Numbers
        </label>
        <label htmlFor="symbolID" className="text-2xl">
          <input
            type="checkbox"
            name="symbol"
            id="symbolID"
            className="checkbox
          checkbox-xl checkbox-accent mr-4"
          />
          Include Symbols
        </label>
        {state?.errors?.charCondition ? (
          <PassCondition msg={state?.errors?.charCondition} />
        ) : null}
        <StrengthStatus strengthPASS={strengthPASS} />
        <SubmitButton isPending={isPending} />
      </form>
    </section>
  );
}
