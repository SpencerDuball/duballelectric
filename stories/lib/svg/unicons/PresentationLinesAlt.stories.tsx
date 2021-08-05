import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PresentationLinesAlt, PresentationLinesAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/PresentationLinesAlt",
  component: PresentationLinesAlt,
} as ComponentMeta<typeof PresentationLinesAlt>;

const Template: ComponentStory<typeof PresentationLinesAlt> = (
  args: PresentationLinesAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <PresentationLinesAlt {...args} />
    <PresentationLinesAlt {...args} fill="red.500" />
    <PresentationLinesAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
