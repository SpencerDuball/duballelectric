import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WebSectionAlt, WebSectionAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WebSectionAlt",
  component: WebSectionAlt,
} as ComponentMeta<typeof WebSectionAlt>;

const Template: ComponentStory<typeof WebSectionAlt> = (
  args: WebSectionAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <WebSectionAlt {...args} />
    <WebSectionAlt {...args} fill="red.500" />
    <WebSectionAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
