const defaultTheme = require('tailwindcss/defaultTheme');



const config= {
  btn:{
    large : {
      height: '38px',
    },
    medium: {
      height: '32px'
    },
    primary: {
      disabled: {
        backgroundColor: '#8F8F8F',
        textColor: '#1A1A1A'
      },
      backgroundColor: '#0074E8',
      textColor: '#F5F5F5'
    },
  }
};

// config.btn.primary.disabled.backgroundColor


const op = {
  backgroundColor: {
    'btn-primary-disabled': {
      DEFAULT: '#0074E8',
      disabled: 'gray',
      hover: 'blue',
    },
  },
  textColor: {
    'btn-primary' : {
      DEFAULT: '#F5F5F5',
      disabled: 'white',
    }
  },
}


let finalConfig = {
  backgroundColor: {},
  textColor: {},
  height: {},
}


function getConfiguration (config, configKeyToUse){
  
  for(var key in config){
    if( finalConfig[key] ){
      finalConfig[key][configKeyToUse] = config[key] 
    } else {
      let nextConfigKeyToUse = (!configKeyToUse ? key: (configKeyToUse + '-' + key ))
      getConfiguration(config[key], nextConfigKeyToUse)
    }
  }
  return null
}

const data = getConfiguration(config, '')
console.log('finalConfig : ', finalConfig)

module.exports = {
  purge: ['./src/**/**/*.tsx'],
  theme: {
    ...finalConfig,
    fontSize: {
      sm: ['12px', '16px'],
      md: ['14px', '22px'],
      lg: ['16px', '24px'],
    }
    // backgroundColor: {


    //   // btn: {
    //   //   primary: {
    //   //     // DEFAULT: '#0074E8',
    //   //     disabled: 'gray',
    //   //     hover: 'blue',
    //   //   },
    //   // },
    //   // 'btn-primary': {
    //   //   DEFAULT: '#0074E8',
    //   //   disabled: 'gray',
    //   //   hover: 'blue',
    //   // },
    // },
    // textColor: {
    //   btn: {
    //     primary: {
    //       DEFAULT: '#F5F5F5',
    //       disabled: 'white',
    //     },
    //   },
    //   // 'btn-primary' : {
    //   //   DEFAULT: '#F5F5F5',
    //   //   disabled: 'white',
    //   // }
    // },
  },
  variants: {
    inset: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/ui')({
      // layout: 'sidebar',
    }),
  ],
};
