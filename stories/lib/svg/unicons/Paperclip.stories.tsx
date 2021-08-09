import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Paperclip, PaperclipPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Paperclip",
  component: Paperclip,
} as ComponentMeta<typeof Paperclip>;

const Template: ComponentStory<typeof Paperclip> = (args: PaperclipPropsI) => (
  <x.div display="flex" gap="20px">
    <Paperclip {...args} />
    <Paperclip {...args} fill="red.500" />
    <Paperclip {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
