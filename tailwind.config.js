/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        'susceptible-colour': '#95d195',
        'intermediate-resistance-colour': '#f6d481',
        'resistant-colour': '#f67f7f',
        'selected-sample-background-color': '#dddddd',
        'column-header-background-color': '#999999',
        'column-header-text-color': '#fff',
        'drug-calls-table-header-background-color': '#f9f9f9',
        'completed-badge-background-color': '#4DA87D',
        'sample-list-completed-item-color': '#4DA87D',
        'tbase-color': '#555',
        'tblue-color': '#32B1C6',
        'bbase-color': '#666',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
