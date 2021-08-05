import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CornerLeftDown, CornerLeftDownPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CornerLeftDown",
  component: CornerLeftDown,
} as ComponentMeta<typeof CornerLeftDown>;

const Template: ComponentStory<typeof CornerLeftDown> = (
  args: CornerLeftDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <CornerLeftDown {...args} />
    <CornerLeftDown {...args} fill="red.500" />
    <CornerLeftDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
