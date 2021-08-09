import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WebSection, WebSectionPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/WebSection",
  component: WebSection,
} as ComponentMeta<typeof WebSection>;

const Template: ComponentStory<typeof WebSection> = (
  args: WebSectionPropsI
) => (
  <x.div display="flex" gap="20px">
    <WebSection {...args} />
    <WebSection {...args} fill="red.500" />
    <WebSection {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
