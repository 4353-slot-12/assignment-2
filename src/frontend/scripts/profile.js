const validZipCodeRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;
const validStateRegex = /^(?-i:A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/;


function handleSubmit() {
    const name = document.getElementById("name");
    const address1 = document.getElementById("address1");
    const address2 = document.getElementById("address2");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");

    if (!address1.value.length && address2.value.length) {
        address1.value = address2.value;
        address2.value = "";
    }

    const nameExists = !!name.value.length;
    const addressExists = !!address1.value.length;
    const cityExists = !!city.value.length;
    const stateValid = !!validStateRegex.match(state.value);
    const zipCodeValid = !!validZipCodeRegex.match(zip.value);

    if (nameExists && addressExists && cityExists && stateValid && zipCodeValid) return true;

    if (!nameExists) name.focus();
    if (!addressExists) address1.focus();
    if (!zipCodeValid) zip.focus();
    if (!cityExists) city.focus();
    if (!stateValid) state.focus();

    return false;
}