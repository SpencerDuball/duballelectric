import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { AdobeAlt, AdobeAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/AdobeAlt",
  component: AdobeAlt,
} as ComponentMeta<typeof AdobeAlt>;

const Template: ComponentStory<typeof AdobeAlt> = (args: AdobeAltPropsI) => (
  <x.div display="flex" gap="20px">
    <AdobeAlt {...args} />
    <AdobeAlt {...args} fill="red.500" />
    <AdobeAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
