import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { ArrowsLeftDown, ArrowsLeftDownPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ArrowsLeftDown",
  component: ArrowsLeftDown,
} as ComponentMeta<typeof ArrowsLeftDown>;

const Template: ComponentStory<typeof ArrowsLeftDown> = (
  args: ArrowsLeftDownPropsI
) => (
  <x.div display="flex" gap="20px">
    <ArrowsLeftDown {...args} />
    <ArrowsLeftDown {...args} fill="red.500" />
    <ArrowsLeftDown {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
