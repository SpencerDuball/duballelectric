import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeyholeSquareFull, KeyholeSquareFullPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/KeyholeSquareFull",
  component: KeyholeSquareFull,
} as ComponentMeta<typeof KeyholeSquareFull>;

const Template: ComponentStory<typeof KeyholeSquareFull> = (
  args: KeyholeSquareFullPropsI
) => (
  <x.div display="flex" gap="20px">
    <KeyholeSquareFull {...args} />
    <KeyholeSquareFull {...args} fill="red.500" />
    <KeyholeSquareFull {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
