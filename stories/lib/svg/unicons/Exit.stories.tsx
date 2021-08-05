import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Exit, ExitPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Exit",
  component: Exit,
} as ComponentMeta<typeof Exit>;

const Template: ComponentStory<typeof Exit> = (args: ExitPropsI) => (
  <x.div display="flex" gap="20px">
    <Exit {...args} />
    <Exit {...args} fill="red.500" />
    <Exit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
