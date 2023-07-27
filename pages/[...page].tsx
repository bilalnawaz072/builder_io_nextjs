// pages/[...page].tsx
import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing, Builder } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { type } from "os";
import { Toaster } from "@/components/ui/toaster"


// Replace with your Public API Key
builder.init("cf634eb9d6274cdb8d10d893067bd248");

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages.map((page) => `${page.data?.url}`).filter(url => url !== '/'),
    fallback: 'blocking',
  };
}

Builder.register('insertMenu', {
  name: 'ShadCN UI',
  items: [
    { name: 'Accordion' },
    { name: 'Alert' },
    { name: 'Dialogue' },
    { name: 'Avatar' },
    { name: 'Badge' },
    { name: 'Button' },
    { name: 'Button Varients' },
    { name: 'Card 1' },
    { name: 'Card 2' },
    { name: 'Collapsible' },
    { name: 'Combobox' },
    { name: 'Date Picker' },
    { name: 'Date Range Picker' },
    { name: 'Dialog2' },
    { name: 'Hover Card' },
    { name: 'Email Form' },
    { name: 'Multi Input Select' },
    { name: 'Popover' },
    { name: 'Progress Bar' },
    { name: 'Radio Group' },
    { name: 'Scroll Area' },
    { name: 'Separator' },
    { name: 'Skeleton' },
    { name: 'Slider' },
    { name: 'Switch' },
    { name: 'Textarea' },
    { name: 'Toast' }


  ],
});

// Shad CN Components
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/Accordion')),
  {
    name: 'Accordion',
    inputs: [
      // 'name' is the name of your prop
      { name: 'trigger', type: 'string' },
      { name: 'content', type: 'longText' },

    ],
    image: 'http://127.0.0.1:3000/accordion.png',

  }
)

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/Alert')),
  {
    name: 'Alert',
    inputs: [
      // 'name' is the name of your prop
      { name: 'title', type: 'string' },
      { name: 'description', type: 'longText' },
      { name: 'variant', type: 'enum', enum: ["default", "destructive"] },
      { name: 'className', type: 'string', advanced: true },
    ],
    image: 'http://127.0.0.1:3000/alert.png'
  }
)

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/alert-dialog')),
  {
    name: 'Dialogue',
    inputs: [
      // 'name' is the name of your prop
      { name: 'titleBtn', type: 'string' },
      { name: 'alertDialogueTitle', type: 'string' },
      { name: 'dialogueDescription', type: 'longText' },
      { name: 'cancelBtn', type: 'string' },
      { name: 'continueBtn', type: 'string' },

      { name: 'variant', type: 'enum', enum: ["default", "destructive", "link", "outline", "secondary", "ghost"] },
    ],
    image: 'http://127.0.0.1:3000/pop-up.png'
  }
)

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/avatar')),
  {
    name: 'Avatar',
    inputs: [
      { name: 'imageUrl', type: 'string' },
      { name: 'fallbackText', type: 'string' },
    ],
    image: 'http://127.0.0.1:3000/user.png',
  }
)



Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/badge')),
  {
    name: 'Badge',
    inputs: [
      { name: 'content', type: 'string' },
      { name: 'variant', type: 'enum', enum: ["default", "destructive", "outline", "secondary"] },

    ],
    image: 'http://127.0.0.1:3000/badge.png',
  }
);
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/button')),
  {
    name: 'Button',
    inputs: [
      { name: 'text', type: 'string' },
      {
        name: 'backgroundColor',
        type: 'color',
        defaultValue: '#B30F0F',
      },
      {
        name: 'color',
        type: 'color',
        defaultValue: '#F8E71C',
      }

    ],
    image: 'http://127.0.0.1:3000/panic-button.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/buttonVarients')),
  {
    name: 'Button Varients',
    inputs: [
      { name: 'text', type: 'string', defaultValue: "Click Me", helperText: 'Button name', friendlyName: 'Write your button name' },

      {
        name: 'variant', type: 'enum', enum: ["default", "destructive", "link", "outline", "secondary", "ghost"], defaultValue: "default", helperText: 'Select Your button type ',

      },
      { name: 'showIcon', type: 'boolean', defaultValue: false, helperText: 'Either Icon appear or not' },
      {
        name: "link", type: "string",
        helperText: 'Works Only when varient of Link is selected',
        defaultValue: "https://www.google.com"

      },
    ],
    image: 'http://127.0.0.1:3000/play-button.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/card')),
  {
    name: 'Card 1',
    inputs: [
      { name: 'title', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'namePlaceholder', type: 'string' },
      { name: 'frameworkPlaceholder', type: 'string' },
      { name: 'cancelBtnText', type: 'string' },
      { name: 'deployBtnText', type: 'string' },
    ],
    image: 'http://127.0.0.1:3000/credit-card.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/card2')),
  {
    name: 'Card 2',
    inputs: [
      {
        name: 'notifications',
        type: 'list',
        subFields: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'string' },
        ],
      },
    ],
    image: 'http://127.0.0.1:3000/credit-card.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/checkbox')),
  {
    name: 'Checkbox',
    inputs: [
      { name: 'label', type: 'string', helperText: 'Checkbox name', friendlyName: 'Write your checkbox name' },
      { name: 'description', type: 'string' },
    ],
    image: 'http://127.0.0.1:3000/checkbox.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/collapsible')),
  {
    name: 'Collapsible',
    inputs: [
      { name: 'title', type: 'string' },
      {
        name: 'repositories',
        type: 'list',
        friendlyName: 'Collapsible Items',
        subFields: [
          { name: 'repo', type: 'string', friendlyName: 'Write your item name like Psychology' },
        ]
      },
    ],
    image: 'http://127.0.0.1:3000/collapse.png',
  }
);


Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/datePicker')),
  {
    name: 'Date Picker',
    image: 'http://127.0.0.1:3000/date.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/DateRangePicker')),
  {
    name: 'Date Range Picker',
    image: 'http://127.0.0.1:3000/date.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/dialog')),
  {
    name: 'Dialog2',
    inputs: [
      { name: 'name', type: 'string' },
      { name: 'username', type: 'string' },
    ],
    image: 'http://127.0.0.1:3000/pop-up.png',
  }
);



Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/hoverCard')),
  {
    name: 'Hover Card',
    inputs: [
      { name: 'username', type: 'string' ,helperText:'Write your username' },
      { name: 'avatarSrc', type: 'string' ,defaultValue: 'http://127.0.0.1:3000/credit-card.png' },
      { name: 'avatarFallback', type: 'string' ,defaultValue:'Alternative  text' },
      { name: 'bio', type: 'longText' ,defaultValue:'Write your bio' },
      { name: 'joinedDate', type: 'date' },
    ],
    image: 'http://127.0.0.1:3000/credit-card.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/emailForm')),
  {
    name: 'Email Form',
    inputs: [
      {
        name: 'label',
        type: 'text',
        defaultValue: 'Email', // Set a default value if needed
      },
      {
        name: 'inputPlaceholder',
        type: 'text',
        defaultValue: 'Email', // Set a default value if needed
      },
      {
        name: 'buttonText',
        type: 'text',
        defaultValue: 'Subscribe', // Set a default value if needed
      },
      {
        name:'showButton',
        type: 'boolean',
        defaultValue: true
      }
    ],
    image: 'http://127.0.0.1:3000/email.png',
  }
);
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/fileForm')),
  {
    name: 'Multi Input Select',
    inputs: [
      { name: 'label', type: 'string' ,defaultValue: 'file' },
      { name: 'type', type: 'string', defaultValue: 'file', enum: ['file', 'text', 'email', 'password', 'number', 'url', 'date', 'checkbox', 'radio', 'color', 'range', 'submit', 'button', 'search', 'tel', 'datetime-local', 'month', 'week', 'time', 'hidden', 'image', 'reset'] },
    ],
    image: 'http://127.0.0.1:3000/file.png',
  }
);



Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/pop-over')),
  {
    name: 'Popover',
    inputs: [
      { name: 'content', type: 'text', defaultValue: 'Place content for the popover here.' },
    ],
    image: 'http://127.0.0.1:3000/new-window.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/progressBar')),
  {
    name: 'Progress Bar',
    inputs: [
      { name: 'initialProgress', type: 'number', defaultValue: 13 },
      { name: 'duration', type: 'number', defaultValue: 500,
      helperText:'Duration in miliseconds' },
      { name: 'timedProgress', type: 'number' ,defaultValue: 50,
        helperText:'Progress in percentage after time' },
    ],
    image: 'http://127.0.0.1:3000/performance.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/radioGroup')),
  {
    name: 'Radio Group',
    inputs: [
      {
        name: 'options',
        type: 'list',
        subFields: [
          { name: 'value', type: 'string' },
        ],
        defaultValue: [
          { value: 'default', label: 'Default' },
          { value: 'comfortable', label: 'Comfortable' }
        ],
      },
      { name: 'defaultValue', type: 'string', defaultValue: 'comfortable' },
    ],
    image: 'http://127.0.0.1:3000/radio.png',
  }
);


Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/scrollArea')),
  {
    name: 'Scroll Area',
    inputs: [
      {
        name: 'height',
        type: 'string',
        defaultValue: '100px', 
      },
      {
        name: 'width',
        type: 'string',
        defaultValue: '450px', 
      },
      {
        name: 'text',
        type: 'longText',
        defaultValue: 'Your Text here', 
      },
      {
        name:'resize',
        type:'enum',
        defaultValue:'none',
        enum:['none' , 'both' , 'horizontal' , 'vertical' , 'block' , 'inline'],
      }
    ],
    image: 'http://127.0.0.1:3000/hand-cursor.png',
  }
);


Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/seprater')),
  {
    name: 'Separator',
    inputs: [
      {
        name: 'className',
        type: 'string',
        defaultValue: 'my-4',
      },
      {
        name: 'orientation',
        type: 'enum',
        enum: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
    ],
    image: 'http://127.0.0.1:3000/separator.png',
  }
);


Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/skeleton')),
  {
    name: 'Skeleton',
    inputs: [
      {
        name: 'circleWidth',
        type: 'string',
        defaultValue: '12px', // Set a default value for circleWidth
      },
      {
        name: 'circleHeight',
        type: 'string',
        defaultValue: '12px', // Set a default value for circleHeight
      },
      {
        name: 'lineWidth',
        type: 'string',
        defaultValue: '100px', // Set a default value for lineWidth
      },
      {
        name: 'lineHeight',
        type: 'string',
        defaultValue: '20px', // Set a default value for lineHeight
      },
    ],
    image: 'http://127.0.0.1:3000/skeleton.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/slider')),
  {
    name: 'Slider',
    inputs: [
      {
        name: 'max',
        type: 'number',
        defaultValue: 100, // Set a default value for max
      },
      {
        name: 'step',
        type: 'number',
        defaultValue: 1, // Set a default value for step
      },
   
    ],
    image: 'http://127.0.0.1:3000/slider.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/switch')),
  {
    name: 'Switch',
    inputs: [
      { name: 'id', type: 'string', defaultValue: 'airplane-mode' },
      { name: 'label', type: 'string', defaultValue: 'Airplane Mode' },
      {name:'isLabel', type:'boolean', defaultValue:true},
    ],
    image: 'http://127.0.0.1:3000/switch.png',
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/textArea')),
  {
    name: 'Textarea',
    inputs: [
      { name: 'placeholder', type: 'text', defaultValue: 'Enter your text here' },
      { name: 'autoComplete', type: 'text', helperText: 'The value for the autoComplete attribute. Set it to "on" to enable browser autocomplete.' },
      { name: 'cols', type: 'number', helperText: 'The number of columns for the textarea. For example, setting it to 40 will make the textarea 40 characters wide.' },
      { name: 'dirName', type: 'text', helperText: 'The name of the directory where to submit the form data. This is used when the form data needs to be organized into directories.' },
      { name: 'disabled', type: 'boolean', defaultValue: false, helperText: 'Whether the textarea should be disabled or not. If set to true, the user cannot interact with the textarea.' },
      { name: 'form', type: 'text', helperText: 'The id of the form that the textarea belongs to. This associates the textarea with a specific form for processing when the form is submitted.' },
      { name: 'maxLength', type: 'number', helperText: 'The maximum number of characters that the user can enter in the textarea. For example, setting it to 100 will limit the user to enter up to 100 characters.' },
      { name: 'minLength', type: 'number', helperText: 'The minimum number of characters that the user must enter in the textarea. For example, setting it to 10 will require the user to enter at least 10 characters.' },
      { name: 'name', type: 'text', helperText: 'The name of the textarea. This name will be used when submitting the form data to the server. It is important to give each textarea a unique name within the form.' },
      { name: 'readOnly', type: 'boolean', defaultValue: false, helperText: 'Whether the textarea is read-only or not. If set to true, the user cannot edit the content of the textarea.' },
      { name: 'required', type: 'boolean', defaultValue: false, helperText: 'Whether the textarea is required or not. If set to true, the user must enter some text in the textarea before submitting the form.' },
      { name: 'rows', type: 'number', helperText: 'The number of rows for the textarea. For example, setting it to 4 will make the textarea display 4 lines of text.' },
      { name: 'value', type: 'text', helperText: 'The initial value of the textarea. This is the default text that will be displayed in the textarea when it is first rendered.' },
      { name: 'wrap', type: 'text', helperText: 'The value for the wrap attribute. Set it to "hard" to indicate that the text should wrap to the next line when it reaches the end of the textarea, or set it to "soft" to indicate that the text should only wrap to the next line if the user presses the Enter key.' },
    ],
    image: 'http://127.0.0.1:3000/text.png',
  }
);
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/toast')),
  {
    name: 'Toast',
    inputs: [
      { name: 'buttonText', type: 'string', defaultValue: 'Show Toast' },
      {
        name: 'btnVariant',
        type: 'enum',
        enum: ['default', 'destructive', 'link', 'outline', 'secondary', 'ghost'],
        defaultValue: 'outline',
      },
      {
        name: 'toastvariant',
        type: 'enum',
        enum: ['default', 'destructive'],
        defaultValue: 'default',
      },
      { name: 'title', type: 'string', defaultValue: 'Uh oh! Something went wrong.' },
      {
        name: 'description',
        type: 'longText',
        defaultValue: 'There was a problem with your request.',
      },
      { name: 'actionAltText', type: 'string', defaultValue: 'Try again' },
    ],
    image: 'http://127.0.0.1:3000/notifications.png',
  }
);
















// ------------------------------------------------------------------//
Builder.register('insertMenu', {
  name: 'Complex Shadcn Components',
  items: [
    { name: 'Form' },
    { name: 'Calendar' },
    { name: 'Calender 2' },
    { name: 'Menubar' },


  ],
});

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/form')),
  {
    name: 'Form',
    inputs: [
      {
        name: 'onSubmit',
        type: 'action',
      },
      {
        name: 'defaultValues',
        type: 'object',
        subFields: [
          { name: 'username', type: 'string' },
          { name: 'email', type: 'string' },
          { name: 'bio', type: 'string' },
          {
            name: 'urls',
            type: 'list',
            subFields: [
              { name: 'value', type: 'string' }
            ]
          },
        ],
      },
    ],
    image: 'http://127.0.0.1:3000/profile-form-shadcn.png',
  }
);
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/calendar')),
  {
    name: 'Calendar',

    inputs: [
      { name: 'className', type: 'string' },
    ],
    image: 'http://127.0.0.1:3000/calendar.png',
  }
)
Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/calender2')),
  {
    name: 'Calender 2',
    image: 'http://127.0.0.1:3000/calendar.png',
  }
)

Builder.registerComponent(
  dynamic(() => import('../elements/shadcn_ui/navbar')),
  {
    name: 'Menubar',
    inputs: [
      { name: 'menu1', type: 'list', subFields: [{ name: 'menu1', type: 'string' }] },
      { name: 'menu2', type: 'list', subFields: [{ name: 'menu2', type: 'string' }] },
      { name: 'menu3', type: 'list', subFields: [{ name: 'menu3', type: 'string' }] },
      { name: 'menu4', type: 'list', subFields: [{ name: 'menu4', type: 'string' }] },
      { name: 'alwaysShowBookmarks', type: 'boolean' },
      { name: 'alwaysShowFullURLs', type: 'boolean' },
      {
        name: 'subMenus',
        type: 'list',
        subFields: [
          { name: 'trigger', type: 'string' },
          {
            name: 'content',
            type: 'list',
            subFields: [{ name: 'item', type: 'string' }],
          },
        ],
      },
    ],
    image: 'http://127.0.0.1:3000/menu.png',
  }
);



// --------------------------------------------------------------------------//

Builder.register('insertMenu', {
  name: 'Testing Components',
  items: [
    { name: 'Major Components' },
    { name: 'Object Example' },
  ],
});
Builder.registerComponent(
  dynamic(() => import('../elements/Test/major')),
  {
    name: 'Major Components',
    inputs: [
      { name: 'string', type: 'string' },
      { name: 'number', type: 'number' },
      { name: 'boolean', type: 'boolean' },
      { name: 'longText', type: 'longText' },
      { name: 'richText', type: 'richText' },
      { name: 'file', type: 'file' },
      { name: 'color', type: 'color' },
      { name: 'date', type: 'date' },
      { name: 'email', type: 'email' },

    ],
  }
);

Builder.registerComponent(
  dynamic(() => import('../elements/Test/object')),
  {
    name: 'Object Example',
    inputs: [{ name: 'object', type: 'object' }],
  }
);



// Children Change -------------------
Builder.registerComponent(
  dynamic(() => import('../elements/children_test')),
  {
    name: 'Children Example',
    inputs: [{ name: 'title', type: 'string' }, { name: 'description', type: 'string' }],
    // Adding defaults is important for easy usability
    defaultChildren: [
      { 
        '@type': '@builder.io/sdk:Element',
        component: { name: 'Email Form', options: { label:"Email Form", inputPlaceholder:"Enter you email", buttonText:"Send", showButton:true } }
      }
    ]
  }
);












// Define the Page component
export default function Page({ page }: { page: BuilderContent | null }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>
      <Toaster />
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page || undefined} />

    </>
  );
}