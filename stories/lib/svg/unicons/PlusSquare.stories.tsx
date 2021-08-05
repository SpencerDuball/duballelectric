import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PlusSquare, PlusSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PlusSquare",
  component: PlusSquare,
} as ComponentMeta<typeof PlusSquare>;

const Template: ComponentStory<typeof PlusSquare> = (
  args: PlusSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <PlusSquare {...args} />
    <PlusSquare {...args} fill="red.500" />
    <PlusSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
