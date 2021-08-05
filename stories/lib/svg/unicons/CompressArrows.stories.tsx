import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CompressArrows, CompressArrowsPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/CompressArrows",
  component: CompressArrows,
} as ComponentMeta<typeof CompressArrows>;

const Template: ComponentStory<typeof CompressArrows> = (
  args: CompressArrowsPropsI
) => (
  <x.div display="flex" gap="20px">
    <CompressArrows {...args} />
    <CompressArrows {...args} fill="red.500" />
    <CompressArrows {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
