import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { TextFields, TextFieldsPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TextFields",
  component: TextFields,
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = (
  args: TextFieldsPropsI
) => (
  <x.div display="flex" gap="20px">
    <TextFields {...args} />
    <TextFields {...args} fill="red.500" />
    <TextFields {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
