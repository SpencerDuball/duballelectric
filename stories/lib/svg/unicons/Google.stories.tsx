import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Google, GooglePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Google",
  component: Google,
} as ComponentMeta<typeof Google>;

const Template: ComponentStory<typeof Google> = (args: GooglePropsI) => (
  <x.div display="flex" gap="20px">
    <Google {...args} />
    <Google {...args} fill="red.500" />
    <Google {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
