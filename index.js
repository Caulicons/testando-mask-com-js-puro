const masks = {
    cpf (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
     
    cnpj (value) {
        return value
        .replace(/\D/g , '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },

    telefone (value) {
        //(000) 9-9999-9999
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})/, '($1) ')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')

    },

    cep (value) {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
        .replace(/(-\d{3})\d+?$/, '$1')
    },

    pis (value){
        //000.00000.00-00
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(.\d{5})(\d)/, '$1.$2')
        .replace(/(\d{5}.\d{2})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    }  
}

document.querySelectorAll('input').forEach(($inputs) => {
    const field =  $inputs.dataset.form

    $inputs.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    })
})