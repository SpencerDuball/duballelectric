import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VectorSquare, VectorSquarePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VectorSquare",
  component: VectorSquare,
} as ComponentMeta<typeof VectorSquare>;

const Template: ComponentStory<typeof VectorSquare> = (
  args: VectorSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <VectorSquare {...args} />
    <VectorSquare {...args} fill="red.500" />
    <VectorSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
