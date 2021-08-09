import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CloudMoon, CloudMoonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CloudMoon",
  component: CloudMoon,
} as ComponentMeta<typeof CloudMoon>;

const Template: ComponentStory<typeof CloudMoon> = (args: CloudMoonPropsI) => (
  <x.div display="flex" gap="20px">
    <CloudMoon {...args} />
    <CloudMoon {...args} fill="red.500" />
    <CloudMoon {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
