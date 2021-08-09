import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HoldScrewdriver, HoldScrewdriverPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/HoldScrewdriver",
  component: HoldScrewdriver,
} as ComponentMeta<typeof HoldScrewdriver>;

const Template: ComponentStory<typeof HoldScrewdriver> = (
  args: HoldScrewdriverPropsI
) => (
  <x.div display="flex" gap="20px">
    <HoldScrewdriver {...args} />
    <HoldScrewdriver {...args} fill="red.500" />
    <HoldScrewdriver {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
