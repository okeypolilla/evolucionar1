let SQ = [
   '* - + /', '! " # $', '$ % & (', ') = ? ¿', '[ ] { }',
   '了 子 女 好', '姦 口 品 言', '下 不 否 十', '叶 旦 皆 月' , '湖 明 火 千',
   'A B Γ Δ', 'E Z H Θ', 'Ι K Λ M', 'N Ξ O Π', 'P Σ T Y', 'Φ X Ψ Ω',
   '✻ ✼ ✾ ✿', '❀ ❁ ❃ ❇', '⚀ ⚁ ⚂ ⚃', '♓ ♒ ♑ ♐', '⠿ ⠾ ⠺ ⠻', '⠮ ⠭ ✚ ∞'
];

const SQRN = () => {return Math.floor(Math.random() * SQ.length);}
 

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};