import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { KeyholeSquare, KeyholeSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/KeyholeSquare",
  component: KeyholeSquare,
} as ComponentMeta<typeof KeyholeSquare>;

const Template: ComponentStory<typeof KeyholeSquare> = (
  args: KeyholeSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <KeyholeSquare {...args} />
    <KeyholeSquare {...args} fill="red.500" />
    <KeyholeSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
