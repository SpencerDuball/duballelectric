import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationPlus, PresentationPlusPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationPlus",
  component: PresentationPlus,
} as ComponentMeta<typeof PresentationPlus>;

const Template: ComponentStory<typeof PresentationPlus> = (
  args: PresentationPlusPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationPlus {...args} />
    <PresentationPlus {...args} fill="red.500" />
    <PresentationPlus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
